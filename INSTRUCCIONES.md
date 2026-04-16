# El Callejero - Website Moderno

Sitio web moderno y elegante para el restaurante El Callejero (Street Food Gourmet) en Liberia, Costa Rica.

## 📦 Contenido del Proyecto

```
el-callejero-website/
├── frontend/              # Aplicación React
│   ├── src/
│   │   ├── components/    # Componentes React
│   │   ├── pages/         # Páginas
│   │   ├── hooks/         # React hooks
│   │   └── mock.js        # Datos mock del restaurante
│   ├── public/
│   └── package.json
├── backend/               # API FastAPI (pendiente)
│   ├── server.py
│   └── requirements.txt
└── memory/               # Documentación
    └── PRD.md
```

## 🚀 Instalación y Uso

### Frontend

```bash
cd frontend
yarn install
yarn start
```

La aplicación se abrirá en `http://localhost:3000`

### Backend (Opcional)

```bash
cd backend
pip install -r requirements.txt
python server.py
```

## 🎨 Características

- ✨ **Hero Section** con carrusel automático de imágenes
- 🍔 **Menú Interactivo** con modal PDF flip
- 📍 **Google Maps** integrado
- 📱 **Redes Sociales** con cards animadas
- 💬 **Botón Flotante** WhatsApp + PedidosYa
- 🎯 **100% Responsive** (mobile-first)
- ⚡ **Animaciones suaves** en toda la interfaz

## 🛠️ Tecnologías

- **Frontend**: React 19, Tailwind CSS, Shadcn UI
- **Backend**: FastAPI, MongoDB (por implementar)
- **Librerías**: react-router-dom, lucide-react, axios

## 📝 Configuración

### Variables de Entorno

**Frontend** (`frontend/.env`):
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

**Backend** (`backend/.env`):
```
MONGO_URL=mongodb://localhost:27017/
DB_NAME=el_callejero
```

## 🌐 Despliegue en GitHub

### 1. Crear repositorio en GitHub

```bash
git init
git add .
git commit -m "Initial commit: El Callejero website"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/el-callejero.git
git push -u origin main
```

### 2. Despliegue con Vercel (Frontend)

1. Importa tu repositorio de GitHub en Vercel
2. Framework: Create React App
3. Build Command: `cd frontend && yarn build`
4. Output Directory: `frontend/build`
5. Install Command: `cd frontend && yarn install`

### 3. Despliegue con Render (Backend - Opcional)

1. Conecta tu repositorio
2. Selecciona Python
3. Build Command: `pip install -r backend/requirements.txt`
4. Start Command: `python backend/server.py`

## 📱 Información del Negocio

- **Nombre**: El Callejero
- **Ubicación**: JHM5+5XM, Liberia, Los Cerros
- **Teléfono**: 2665-4111
- **WhatsApp**: +506 8864 4396
- **Horario**: Martes a Domingo 11:00-22:00 (Cerrado Lunes)

## 🔗 Enlaces

- Facebook: https://facebook.com/share/19RTBffDvQ/
- Instagram: @el_callejero_liberia
- TikTok: @el.callejero5
- PedidosYa: https://pedidosya.cr/restaurantes/liberia/el-callejero-liberia-menu

## 📄 Licencia

Proyecto privado - © 2026 El Callejero

## 🤝 Soporte

Para soporte o consultas, contacta a través de WhatsApp: +506 8864 4396
