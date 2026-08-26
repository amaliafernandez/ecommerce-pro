# 🛒 PROtech — E-commerce Pro

Ecommerce de productos de tecnología (notebooks, monitores, periféricos, audio y
almacenamiento) desarrollado como **Proyecto Integrador del Módulo 2** en
**Rolling Code School** (Desarrollo Web Full Stack).

Los visitantes navegan el catálogo y ven el detalle de cada producto, mientras que un
administrador gestiona el inventario desde un panel protegido. Toda la información
persiste en el navegador con **LocalStorage** y **SessionStorage**, sin backend.

## 🌐 Despliegue

🔗 **Demo en vivo:** _[completar con el link del deploy]_

## ✨ Funcionalidades

### Usuario visitante

- Catálogo dinámico con **filtros por nombre y categoría** en tiempo real.
- **Carousel** de productos destacados en la página principal.
- Página de **detalle de producto** con nombre, precio, categoría, stock y descripción.
- **Registro y login simulado** con validaciones de formulario.
- **Persistencia de sesión** que identifica el perfil (Invitado / Administrador).

### Usuario administrador

- **Panel CRUD** con tabla de productos y acciones de agregar, editar y borrar.
- Formulario de inventario con **validaciones robustas** de campos obligatorios.
- **Gestión de usuarios**: visualización y eliminación de usuarios registrados.
- **Ruta `/admin` protegida**: solo accesible con sesión de administrador.

## 👤 Usuarios y autenticación

La aplicación utiliza una autenticación **simulada**, sin backend.

Los usuarios se almacenan en `localStorage` bajo la clave:

```text
usuarios
```

La sesión del usuario autenticado se guarda en:

```text
usuarioKey
```

dentro de `sessionStorage`.

### Usuarios iniciales de prueba

| Usuario          | Email                 | Contraseña     | Rol      |
| ---------------- | --------------------- | -------------- | -------- |
| Amalia Fernández | `amalia@mail.com`     | `admin123`     | Admin    |
| Andrea Reyes     | `andrea@mail.com`     | —              | Invitado |
| Stefan Dios      | `stefan@mail.com`     | `admin123`     | Admin    |
| Juan Pérez       | `juanp@mail.com`      | —              | Invitado |
| Usuario Protech  | `usuario@protech.com` | `Usuario12345` | Admin    |

> **Importante:** estas credenciales forman parte de una autenticación simulada para fines académicos. No deben utilizarse como sistema de autenticación real.

---

## 🛠️ Tecnologías

| Categoría          | Herramientas                  |
| ------------------ | ----------------------------- |
| Librería UI        | React 19                      |
| Build tool         | Vite                          |
| Estilos            | Tailwind CSS v4               |
| Ruteo              | React Router                  |
| Formularios        | React Hook Form               |
| Alertas            | SweetAlert2                   |
| Íconos             | React Icons                   |
| Persistencia       | LocalStorage / SessionStorage |
| Gestor de paquetes | pnpm                          |
| Despliegue         | Netlify                       |

---

## 🚀 Instalación y uso local

Requisitos: **Node.js 22+** y **pnpm**.

```bash
# Clonar el repositorio
git clone [url-del-repositorio]
cd ecommerce-pro

# Instalar dependencias
pnpm install

# Levantar el entorno de desarrollo
pnpm run dev
```

La aplicación queda disponible en `http://localhost:5173`.
Para ingresar al panel, registrá una cuenta desde `/register` marcando la opción
_"Crear cuenta como Administrador"_.

---

## 👥 Equipo

Grupo de estudiantes de Desarrollo Full Stack. Creamos PROtech como proyecto integrador
para ofrecer una experiencia de ecommerce simple y moderna.

| Integrante       | Rol                                |
| ---------------- | ---------------------------------- |
| Amalia Fernández | Scrum Master / Front-end Developer |
| Andrea Reyes     | Front-end Developer                |
| Stefan Dios      | Front-end Developer                |

---

## 📄 Licencia

Proyecto académico desarrollado en **RollingCode School**.
