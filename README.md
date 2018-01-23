# Buscador Interno


## Descripción

Este funciona como ejemplo de una página web que utiliza un buscador interno para navegar tanto entre sus títulos como 
en listas, párrafos o cualquier elemento html que se le añada.

Funciona de forma que redirige al usuario a el html donde se encuentre el elemento seleccionado.

![Imágen de demostración 1](/assets/web1.png)
![Imágen de demostración 2](/assets/web2.png)
![Imágen de demostración 3](/assets/web3.png)

## Funcionamiento

Para poder poner el buscador en funcionamiento debes añadir a tu web varios elementos:

1.  Input de búsqueda

```HTML
<input type="search" placeholder="Buscar . . ." id="inputBusqueda"/>
```

2.  Tabla de búsqueda en el HTML


Esta tabla es la que se mostrará cuando un usuario realice una búsqueda.
Conviene darle estilos CSS.


```HTML
 <!-- Busqueda -->
        <div class="search" id="search">
          <table class="search-tabla" id="searchTabla">
            <thead><tr><td></td></tr></thead>
            <tbody id="tabla"></tbody>
          </table>
</div>
```

3.  Añadir buscador.js


```HTML
<script src="js/buscador.js"></script>
```



