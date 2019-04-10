# RRHH Dockerizada
Backend dockerizado de la aplicacion para la tesis de recursos humanos.
Esto levanta el backend con registro login y perfil, levanta postgresql y levanta redis (otra base de datos para manejar sesiones esta muy piola).

1. git clone "a este repositorio"
2. ejecutar `npm install`
3. Tener instalado docker
4. ejecutar `docker-compose up` ( ejecutar por primera vez!! `docker-compose up --build`)
5. Instalar un cliente para postgres puede ser pgadmin 4 o el 3 si usas linux.
6. La conexion al cliente es usuario: admin password: password

**Importante:** si hay errores podes detener el container `docker stop <container name>` 
**Importante:** si tenes otros tipos de problemas `docker-compose down` para bajar todo.

Para acceder al bash:
Run `docker-compose exec rrhh-backend-api bash`

Para acceder a postgres: 
Ejecutar  `psql postgres://<username>:<password>@localhost:5432/rrhh`

Para acceder a redis:
Run `docker-compose exec redis redis-cli`

# Que comience el JUEGO.

