# Scriptorium - Estrategia de Desarrollo y Contexto para IAs

## Resumen del Proyecto

**Scriptorium** es una plataforma web educativa e informativa que permite a estudiantes, profesores y personas cotidianas crear, compartir, actualizar, eliminar y versionar artículos sobre sus áreas de estudio. La plataforma funciona como un repositorio colaborativo de conocimiento con autenticación de usuario e interfaces intuitivas.

---

## Problema a Resolver

Estudiantes y profesores necesitan una plataforma centralizada para:
- Crear y compartir artículos educativos e informativos
- Organizar contenido por áreas de estudio/categorías
- Mantener histórico de versiones de sus artículos
- Descubrir contenido relevante de otros usuarios
- Gestionar su perfil personal y acceso a sus creaciones

---

## Usuarios Objetivo

- **Estudiantes** de todos los niveles educativos
- **Profesores** que deseen compartir material educativo
- **Personas cotidianas** interesadas en aprender y compartir conocimiento
- **Comunidades de aprendizaje** que necesitan un espacio de colaboración

---

## Solución Propuesta

Se desarrollará una página web donde el usuario podrá:
- **Crear artículos** con título, categoría y contenido detallado
- **Subir documentos** o contenido multimedia
- **Actualizar y eliminar** sus artículos en cualquier momento
- **Crear múltiples versiones** de sus artículos con historial de cambios
- **Tener una página personal** con todos sus artículos organizados
- **Buscar y filtrar** artículos por categoría, palabra clave o autor
- **Autenticarse** mediante registro e inicio de sesión
- **Explorar** el contenido de otros usuarios

---

## Funcionalidades Clave

### 1. Crear Artículos
- Formulario completo con campos: título, categoría, contenido
- Soporte para múltiples categorías
- Guardado automático en progreso
- Previsualización antes de publicar

### 2. Encontrar Artículos de Interés
- Barra de búsqueda en tiempo real
- Filtros por categoría
- Clasificación por: recientes, populares, destacados
- Vista de listado de artículos con previsualizaciones

### 3. Autenticación de Usuario
- Sistema de registro con validación de email
- Inicio de sesión seguro
- Mantener sesión activa (localStorage)
- Recuperación de contraseña (futuro)

### 4. Gestión de Artículos Personales
- Editar y eliminar artículos propios
- Historial de versiones
- Vista de borrador/publicado
- Estadísticas de lecturas

### 5. Perfil de Usuario
- Página personal con todos los artículos del usuario
- Información del perfil editable
- Foto de perfil
- Biografía/descripción personal

---

## Arquitectura Técnica

### Stack de Tecnologías - Sprint 1 y 2

**Frontend:**
- HTML5 para estructura
- CSS3 para estilos responsive (estilo académico Wikipedia)
- JavaScript vanilla (Sin frameworks en Sprint 1-2)
- LocalStorage para persistencia de datos

**Datos:**
- LocalStorage del navegador para datos de usuario
- LocalStorage para artículos y versiones
- JSON para estructura de datos

**Diseño:**
- Estilo académico inspirado en Wikipedia
- Tipografía: Georgia (serif)
- Paleta de colores: azules, grises y blancos
- Interfaz limpia y minimalista
- Responsive design (mobile-first)

---

## Plan de Desarrollo - Scrum

### Sprint 1: Estructura HTML y Diseño Básico

**Objetivo:** Construir la estructura visual completa sin lógica funcional

**Tareas:**
1. ✅ Página de inicio con:
   - Barra de navegación con logo y opciones
   - Sidebar de categorías y búsqueda
   - Área de contenido principal (placeholder)
   - Icono de perfil

2. Página de registro e inicio de sesión
   - Formularios HTML con validación básica
   - Campos requeridos: email, contraseña, nombre (en registro)
   - Estilos consistentes

3. Página de perfil personal del usuario
   - Información del usuario
   - Listado de artículos creados
   - Botones para editar perfil

4. Página de creación/edición de artículo
   - Formulario con campos: título, categoría, contenido
   - Editor de texto básico
   - Botones de guardar/cancelar

5. Refinamiento de diseño
   - Tipografía Georgia aplicada globalmente
   - Estilos consistent en todos los elementos
   - Diseño responsive completo
   - Navegación intuitiva

**Historias de Usuario:**
- Como estudiante, quiero poder ver una página de inicio clara para navegar fácilmente
- Como usuario, quiero poder registrarme e iniciar sesión para acceder a la plataforma
- Como usuario, quiero ver mi perfil con todos mis artículos para gestionar mi contenido
- Como usuario, quiero un formulario para crear nuevos artículos
- Como usuario, quiero poder ver artículos organizados por categorías

---

### Sprint 2: Funcionalidad Principal (JavaScript)

**Objetivo:** Implementar toda la lógica del cliente usando JavaScript vanilla

**Tareas:**

1. Sistema de Autenticación
   - Registro e inicio de sesión simulado con localStorage
   - Almacenar datos de usuario (email, contraseña hasheada, nombre)
   - Validación de formularios con mensajes de error
   - Mantener sesión activa

2. Gestión de Artículos
   - Crear artículos (CRUD completo)
   - Almacenar en localStorage como JSON
   - Editar artículos existentes
   - Eliminar artículos con confirmación
   - Sistema de versionado de artículos

3. Renderizado Dinámico
   - Renderizar perfil personal con artículos del usuario
   - Listar artículos en la página de inicio
   - Mostrar detalle de artículo seleccionado
   - Actualizar UI cuando cambian los datos

4. Búsqueda y Filtrado
   - Búsqueda en tiempo real por título y contenido
   - Filtrado por categoría
   - Clasificación por fecha (recientes) y popularidad
   - Actualizar resultados mientras se escribe

5. Validación de Formularios
   - Validar campos requeridos
   - Mostrar mensajes de error claros
   - Validar formato de email
   - Prevenir envíos duplicados

**Historias de Usuario:**
- Como usuario, quiero crear un nuevo artículo y guardarlo en mi perfil
- Como usuario, quiero editar mis artículos para corregir información
- Como usuario, quiero eliminar artículos que no necesito más
- Como usuario, quiero que se guarden las diferentes versiones de mis artículos
- Como usuario, quiero buscar artículos por palabra clave
- Como usuario, quiero filtrar artículos por categoría
- Como usuario, quiero iniciar sesión y que se recuerde mi usuario
- Como usuario, quiero recibir mensajes de error si hay algo mal en los formularios

---

## Estructura de Datos en LocalStorage

### Usuario
```json
{
  "id": "user_timestamp",
  "email": "usuario@email.com",
  "nombre": "Juan Pérez",
  "contraseña": "hasheada_localmente",
  "fotoPerfil": "url_o_base64",
  "biografia": "Descripción personal",
  "fechaCreacion": "2025-01-15",
  "articulosIds": ["article_1", "article_2"]
}
```

### Artículo
```json
{
  "id": "article_timestamp",
  "titulo": "Introducción a JavaScript",
  "categoria": "Programación",
  "contenido": "Contenido del artículo...",
  "autorId": "user_id",
  "fechaCreacion": "2025-01-15",
  "fechaActualizacion": "2025-01-20",
  "versiones": [
    {
      "numeroVersion": 1,
      "contenido": "Contenido original...",
      "fecha": "2025-01-15",
      "cambios": "Contenido inicial"
    }
  ],
  "lecturas": 0,
  "estado": "publicado"
}
```

---

## Estilo de Diseño

### Inspiración: Wikipedia

**Colores:**
- Fondo primario: #f8f9fa (gris muy claro)
- Fondo secundario: #ffffff (blanco)
- Texto principal: #202122 (casi negro)
- Texto secundario: #6a737d (gris)
- Bordes: #d3d3d3 (gris claro)
- Enlace: #0645ad (azul)
- Enlace hover: #0b1ba8 (azul oscuro)

**Tipografía:**
- Font principal: Georgia (serif)
- Tamaño base: 15px
- Line-height: 1.6 - 1.8

**Componentes:**
- Barra de navegación fija, limpia y minimalista
- Sidebar izquierdo para navegación secundaria
- Contenido en columna central
- Máximo ancho: 1400px
- Espaciado consistente y generoso

---

## Convenciones de Código

### Nomenclatura
- **Variables:** camelCase (`userName`, `articleList`)
- **Funciones:** camelCase (`createArticle`, `validateEmail`)
- **Clases CSS:** kebab-case (`.article-title`, `.sidebar-section`)
- **IDs en HTML:** snake_case (`article_123`, `user_profile`)

### Estructura de Archivos
```
proyecto-scrum/
├── home/
│   ├── index.html (página principal)
│   ├── style.css (estilos globales)
│   ├── script.js (lógica principal)
│   ├── pages/ (páginas adicionales)
│   │   ├── login.html
│   │   ├── register.html
│   │   ├── perfil.html
│   │   └── crear-articulo.html
│   └── js/ (módulos JavaScript)
│       ├── auth.js (autenticación)
│       ├── articles.js (gestión de artículos)
│       └── ui.js (manipulación del DOM)
└── agents.md (este archivo)
```

---

## Próximos Pasos

1. ✅ **Paso 1 (Sprint 1):** Página de inicio con diseño
2. **Paso 2:** Páginas de login y registro (HTML/CSS)
3. **Paso 3:** Página de perfil (HTML/CSS)
4. **Paso 4:** Página de crear/editar artículo (HTML/CSS)
5. **Paso 5:** Lógica de autenticación (JavaScript)
6. **Paso 6:** Lógica de gestión de artículos (JavaScript)
7. **Paso 7:** Búsqueda y filtrado (JavaScript)
8. **Paso 8:** Refinamiento y testing

---

## Información para IAs

**Este proyecto es:**
- Educativo, sin frameworks complejos
- Basado en HTML, CSS y JavaScript vanilla
- Diseñado para aprender desarrollo web progresivo
- Implementado sprint por sprint
- Utiliza localStorage como base de datos

**Al asistir con este proyecto:**
- Mantener el estilo académico (Wikipedia)
- Usar Georgia como fuente principal
- Seguir convenciones de nomenclatura establecidas
- Crear código limpio, comentado y reutilizable
- Responder a requisitos específicos sin agregar complejidad innecesaria
- Validar cambios antes de implementar
- Mantener estructura modular del código

**Contexto importante:**
- El usuario aprueba cada paso completado antes de continuar
- Los pasos se marcan como completados cuando se aprueban
- Cada paso es iterativo y puede refinarse
- El objetivo es aprendizaje progresivo
- Se evitan frameworks hasta que sea estrictamente necesario
