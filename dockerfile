# ================================
# FRONTEND BUILD
# ================================
FROM node:18-alpine AS frontend-build

WORKDIR /frontend
COPY Bookskyy/package*.json ./
RUN npm install
COPY Bookskyy/ .
RUN npm run build


# ================================
# BACKEND SETUP
# ================================
FROM node:18-alpine AS backend-build

WORKDIR /backend
COPY Backend/package*.json ./
RUN npm install
COPY Backend/ .


# ================================
# FINAL IMAGE (RUN BOTH APPS)
# ================================
FROM node:18-alpine

WORKDIR /app

# Copy backend
COPY --from=backend-build /backend ./backend

# Copy frontend build
COPY --from=frontend-build /frontend/dist ./frontend

# Install serve to host frontend
RUN npm install -g serve

EXPOSE 5000
EXPOSE 3000

# Start both: backend + frontend in one container
CMD ["sh", "-c", "node backend/server.js & serve -s frontend -l 3000"]
