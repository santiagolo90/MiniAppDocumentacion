import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, DatabaseReference } from 'angularfire2/database';
import { HomePage } from '../../pages/home/home';
import { PaginaUnoPage } from '../../pages/pagina-uno/pagina-uno';

  /**
 * Provider que se usa para guardar/eliminar/actualizar un usuario
 */
@Injectable()
export class ProviderUnoProvider {


  /**
   * Ubicación en Firebase para usuario.
   * @param {DatabaseReference} usuarioRef Ubicación en firebase
   * 
   * 
   * 
   * 
   * @example Como se usa
   * this.usuarioRef = this.database.database.ref('usuario');
   * 
   */

  public usuarioRef: DatabaseReference;
/**
 * 
 * @ignore
 */
  constructor(public database: AngularFireDatabase) {
    this.usuarioRef = this.database.database.ref('usuario');
  }



  /**
   * Devuelve todos los usuarios en firebase
   * 
   * 
   * 
   * @example Como se usa
   * {
   * this.usuarioProv.obtenerUsuarios().subscribe(res => {
   * this.arrayUsuarios = res;
   * }
   * 
   * @example Datos Usuario
   * {
   *       key: id de firebase,
   *       nombre: nombre del usuario
   *       apellido": apellido del usuario
   * }
   */
  public obtenerUsuarios() {
    return this.database.list('usuario').valueChanges();
  }



    /**
   * Guarda un tipo usuario en firebase
   * @param {Usuario} usuario datos Usuario
   * 
   * @example Como se usa
   * {
   * this.usuarioProv.guardarUsuario(this.usuario).then(res => {
   * });
   * }
   * 
   * @example Datos de clase Usuario
   *     {
   *       key : aleatoria de firebase;
   *       nombre: nombre del usuario
   *       apellido: apellido del usuario
   *     }
   * 
   * 
   */
  public guardarUsuario(usuario):PromiseLike<void> {
    return this.usuarioRef.push(usuario).then(res => {
      usuario.key = res.key;
      this.actualizarUsuario(usuario);
    });
  }


    /**
   * Actualiza un tipo usuario en firebase
   * @param {Usuario} usuario datos Usuario
   * @param {ProviderUnoProvider} usuarioProv instancia del provider usuario
   * 
   * 
   * @example Como se usa
   * {
   * this.usuarioProv.actualizarUsuario(this.usuario, true).then(res => {
   * });
   * }
   * 
   * @example Datos de clase Usuario
   *     {
   *       nombre: nombre del usuario
   *       apellido: apellido del usuario
   *     }
   * 
   */
  public actualizarUsuario(usuario, showLoad?):Promise<void> {
    let obj = {};
    obj[usuario.key] = usuario;
    return this.usuarioRef.child(usuario.key).set(usuario).then(res => { }).catch(err => { });
  }


  /**
   * Elimina el usuario que coincida con la key
   * @param {string} key id del usuario
   * @param {ProviderUnoProvider} usuarioProv instancia del provider usuario
   * 
   * 
   * @example Como se usa
   * this.usuarioProv.eliminar(this.usuario.key).then(res => {
   * });
   * 
   * 
   */
  public eliminar(key):Promise<void> {
    return this.usuarioRef.child(key).remove().then(res => {
    }).catch(err => {
      console.log("no se elimino msj");
    });
  }

}
