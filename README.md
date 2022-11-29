## 01 Creación de objetos Javascript

Escribe una función que tome dos arreglos (a y b) como argumentos.
Crear un objeto que tenga propiedades con claves 'a' y valores correspondientes 'b'. Devolver el objeto.

```js
function myFunction(a, b) {
  return;
}
```

| Test Case                                                                            | Expected                                                          |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| myFunction(['a','b','c'],[1,2,3])                                                    | {a:1,b:2,c:3}                                                     |
| myFunction(['a','b','c'],[1,() => {}, {name: 'khriztian'}])                          | {a:1,b:() => {}, c:{name: 'khriztian'}}                           |
| myFunction(['name','hobbies','isAdmin'],['khriztian',['music', 'tv series'], false]) | {name:'khriztian', hobbies:['music', 'tv series'], isAdmin:false} |

## 02 Fix error: Aplanando un arreglo

Estoy tratando de escribir una función para aplanar una matriz de subarreglos en un arreglo. (Supongamos que no sé que hay un método .flat() en el prototipo de Array).

En otras palabras, quiero transformar esto: `[[1, 2], [3, 4]]` en `[1, 2, 3, 4]`.

Aquí está mi código:

```js
function flatten(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.concat(arr[i]);
  }
  return result;
}
```

Pero... ¡no parece estar funcionando! Arregle mi código para que aplane correctamente la matriz.

| Test Case                                | Expected                      |
| ---------------------------------------- | ----------------------------- |
| flatten([[1, 2], [3, 4]])                | `[1, 2, 3, 4]`                |
| flatten([[1], [2], [3], [4]])            | `[1, 2, 3, 4]`                |
| flatten([["a", "b"], ["c", "d"]])        | `["a", "b", "c", "d"]`        |
| flatten([[true, false], [false, false]]) | `[true, false, false, false]` |
