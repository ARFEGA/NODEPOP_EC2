#PRACTICA DevOps

- Repo: [https://github.com/ARFEGA/NODEPOP_EC2]()
- Desplegada en node.arfega.com
- En el apartado "EndPoint's disponobles" en este mismo documento, encontrará las posible acciones que permite esta API, que se pueden probar con Postman.
- IP:34.216.244.45 para ver WEB (plantilla de startbootstrap.com) 

#####PATH'S Archivos estáticos:

- [http://arfega.com/images/anuncios/GAFAS_FOTOCROMATICAS.png]()
- Misma ruta con cualquiera de los siguientes:
	* Aston_Martin.png
	* OLD_PHONE1.jpg
	* guante-riesgos-termicos.png
	* GAFAS_FOTOCROMATICAS.png
	* OLD_CAR6.jpg
	* OLD_PHONE5.jpg
	* casco_OBRA.png
	* guantes-riesgos-mecanicos.png

####EndPoint's disponibles

- Creación de usuarios (http://arfega.com/apiV1/Usuarios/register)
- Autenticación de usuarios (http://arfega.com/apiV1/Usuarios/sign_in)
- Inserción de anuncios (http://arfega.com/apiV1/Anuncios/Inserta?token=)
- Borrado de anuncios (http://arfega.com/<id>?token=)
- Listado de anuncios (multiples posibilidades de filtrado(*)) (http://arfega.com/apiv1/anuncios/listar?fields=-_id+nombre+venta+precio+foto+tags&precio=10-&token)
- Listado de TAGS (http://arfega.com/apiV1/Anuncios/ListaTags?token=)

(*) El filtrado por el campo precio, se realiza contra un .json, donde disponemos de los posibles pares {clave:valor}, por ejemplo: "10-50": { "$gte": 10, "$lte": 50 },


--

--
#PRACTICA NodeJS

##Arrancar MongoDB:
Situarse en la carpeta en la que se encuentra instalado MongoDB y ejecutar desde terminal:

./bin/mongod --dbpath ./data/db --directoryperdb

--

#Despliegue:


### Crear tablas de usuarios y anuncios con varios resgistros en cada una. 

Para crear la tabla anuncios y usuarios (creará tabla e inserta documentos desde archivo .json):
 
npm run initAnuncios

npm run initUsuarios

#Arrancar el servidor:
npm run dev

### Cluster

El servidor arranca tantos fork como núcleos posea el procesador de la máquina en la que esté intalado el API.

### Middlewares disponibles:

* Creación de usuarios (http://localhost:3000/apiV1/Usuarios/register)
* Autenticación de usuarios (http://localhost:3000/apiV1/Usuarios/sign_in)
* Inserción de anuncios (http://localhost:3000/apiV1/Anuncios/Inserta?token=)
* Borrado de anuncios (http://localhost:3000/apiV1/Anuncios/borrado/5a53ec63902b6967eb266f20?token=) 
* Listado de anuncios (multiples posibilidades de filtrado) (http://localhost:3000/apiv1/anuncios/listar?fields=-_id+nombre+venta+precio+foto+tags&precio=10-&token)
* Listado de TAGS (http://localhost:3000/apiV1/Anuncios/ListaTags?token=)

El filtrado por el campo precio, se realiza contra un .json, donde disponemos de los posibles pares {clave:valor}, por ejemplo:
"10-50": { "$gte": 10, "$lte": 50 },

### Autenticación

Se emplea JWT. La clave de autenticación del usuario, se almacena encriptada (bcrypt).

### Internacionalización API:

Disponible para retorno de errores. Por defecto el idioma es 'es'. En la creación del usuario, este indica su lenguaje preferido ('es' o 'en'). En el momento de la autenticación del usuario, se incluye el idioma en la creación del token, obteniendose este en cada petición (post, get, etc..) que se realiza, para determinar el lenguaje del usuario. Se emplea archivo .json donde se accede a la clave concreta, mostrando el error en el idioma del usuario.

La Internacionalización solo ha sido implementada en los middleware asociados a operaciones con usuarios y autenticación, no así en los asociados a gestión de anuncios.



