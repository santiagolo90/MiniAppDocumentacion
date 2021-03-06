define({ "api": [
  {
    "type": "ref",
    "url": "/database.ref(usuario)/",
    "title": "Ubicacion",
    "version": "0.1.0",
    "name": "Ubicacion",
    "group": "Usuario",
    "description": "<p>Provider que se usa para guardar/eliminar/actualizar un usuario</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "DatabaseReference",
            "optional": false,
            "field": "usuarioRef",
            "description": "<p>Ubicación en Firebase para usuario.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Como usarlo:",
        "content": "this.usuarioRef = this.database.database.ref('usuario');",
        "type": "json"
      }
    ],
    "filename": "MiniAppDocumentacion/src/providers/provider-uno/provider-uno.ts",
    "groupTitle": "Usuario"
  },
  {
    "type": "set",
    "url": "/usuarioRef.child(usuario.key).set(usuario)/",
    "title": "Actualizar usuario",
    "version": "0.1.0",
    "name": "actualizarUsuario",
    "group": "Usuario",
    "description": "<p>Actualiza un tipo usuario en firebase</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Usuario",
            "optional": false,
            "field": "usuario",
            "description": "<p>datos Usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "ProviderUnoProvider",
            "optional": false,
            "field": "usuarioProv",
            "description": "<p>instancia del provider usuario</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Como usarlo:",
        "content": "this.usuarioProv.actualizarUsuario(this.usuario, true).then(res => {\n   });",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Datos de clase Usuario:",
          "content": "\n{\n  \"nombre\": \"nombre del usuario\"\n  \"apellido\": \"apellido del usuario\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "MiniAppDocumentacion/src/providers/provider-uno/provider-uno.ts",
    "groupTitle": "Usuario"
  },
  {
    "type": "remove",
    "url": "/usuarioRef.child(key).remove()/",
    "title": "Eliminar usuario",
    "version": "0.1.0",
    "name": "eliminar",
    "group": "Usuario",
    "description": "<p>Elimina el usuario que coincida con la key</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "key",
            "description": "<p>id del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "ProviderUnoProvider",
            "optional": false,
            "field": "usuarioProv",
            "description": "<p>instancia del provider usuario</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Como usarlo:",
        "content": "this.usuarioProv.eliminar(this.usuario.key).then(res => {\n   });",
        "type": "json"
      }
    ],
    "filename": "MiniAppDocumentacion/src/providers/provider-uno/provider-uno.ts",
    "groupTitle": "Usuario"
  },
  {
    "type": "push",
    "url": "/usuarioRef.push(usuario)/",
    "title": "Guardar usuario",
    "version": "0.1.0",
    "name": "guardarUsuario",
    "group": "Usuario",
    "description": "<p>Guarda un tipo usuario en firebase</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Usuario",
            "optional": false,
            "field": "usuario",
            "description": "<p>objeto tipo Usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "ProviderUnoProvider",
            "optional": false,
            "field": "usuarioProv",
            "description": "<p>instancia del provider usuario</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Como usarlo:",
        "content": "this.usuarioProv.guardarUsuario(this.usuario).then(res => {\n \n  });",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Datos de clase Usuario:",
          "content": "\n{\n  \"key\" : aleatoria de firebase;\n  \"nombre\": \"nombre del usuario\"\n  \"apellido\": \"apellido del usuario\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "MiniAppDocumentacion/src/providers/provider-uno/provider-uno.ts",
    "groupTitle": "Usuario"
  },
  {
    "type": "list",
    "url": "/database.list('usuario')/",
    "title": "Obtener usuarios",
    "version": "0.1.0",
    "name": "obtenerUsuarios",
    "group": "Usuario",
    "description": "<p>Devuelve todos los usuarios en firebase</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "arrayUsuarios",
            "description": "<p>Array de usuarios</p>"
          },
          {
            "group": "Parameter",
            "type": "Subscription",
            "optional": false,
            "field": "subs",
            "description": "<p>Para suscribirse</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Como usarlo:",
        "content": " this.usuarioProv.obtenerUsuarios().subscribe(res => {\n      this.arrayUsuarios = res;\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Respuesta con datos del usuario:",
          "content": "\n{\n  \"key\": \"id de firebase\",\n  \"nombre\": \"nombre del usuario\"\n  \"apellido\": \"apellido del usuario\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "MiniAppDocumentacion/src/providers/provider-uno/provider-uno.ts",
    "groupTitle": "Usuario"
  }
] });
