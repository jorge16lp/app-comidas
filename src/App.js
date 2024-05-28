import React, { useState, useEffect } from 'react';
import FoodList from './components/FoodList';
import AddFood from './components/AddFood';
import { format } from 'date-fns';
import ReloadFoods from './components/ReloadFoods';

const App = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
      inicializarComidas().then(comidas => {
          setFoods(comidas);
      });
    }, []);

    const leerComidasDesdeArchivo = async () => {
      try {
          // const response = await fetch('/public/comidas.txt');
          // const text = await response.text();
          // const lines = text.split('\n');
          // const comidas = lines.map(line => {
          //     const [name, timesCooked, lastCooked] = line.split(', ');
          //     return { name, timesCooked: parseInt(timesCooked), lastCooked };
          // });
          const comidas = [
            {
                "name": "Escalopines al cabrales",
                "timesCooked": 0
            }, {
                "name": "Codillo",
                "timesCooked": 0
            }, {
                "name": "Crema de calabacín",
                "timesCooked": 0
            }, {
                "name": "Pescado - Dorada",
                "timesCooked": 0
            }, {
                "name": "Arroz - Con setas",
                "timesCooked": 0
            }, {
                "name": "Revuelto de calabacín",
                "timesCooked": 0
            }, {
                "name": "Patatas con bechamel",
                "timesCooked": 0
            }, {
                "name": "Pasta - Tallarines",
                "timesCooked": 0
            }, {
                "name": "Pasta - Ravioli",
                "timesCooked": 0
            }, {
                "name": "Fritada de garbanzos",
                "timesCooked": 0
            }, {
                "name": "Pescado - Bacalao con tomate",
                "timesCooked": 0
            }, {
                "name": "Berenjenas rellenas",
                "timesCooked": 0
            }, {
                "name": "Pasta - Fideuá",
                "timesCooked": 0
            }, {
                "name": "Cachopos de Ternera",
                "timesCooked": 0
            }, {
                "name": "Pollo - Cachopos",
                "timesCooked": 0
            }, {
                "name": "Escalopines empanados",
                "timesCooked": 0
            }, {
                "name": "Escalopines rebozados",
                "timesCooked": 0
            }, {
                "name": "Cerdo - Solomillo ibérico",
                "timesCooked": 0
            }, {
                "name": "Cerdo - Solomillo",
                "timesCooked": 0
            }, {
                "name": "Solomillo de Ternera",
                "timesCooked": 0
            }, {
                "name": "Cerdo - Chuletas",
                "timesCooked": 0
            }, {
                "name": "Filetes rusos",
                "timesCooked": 0
            }, {
                "name": "Cerdo - Filetes de lomo",
                "timesCooked": 0
            }, {
                "name": "Patatas con costillas",
                "timesCooked": 0
            }, {
                "name": "Pescado - Revuelto de bacalao",
                "timesCooked": 0
            }, {
                "name": "Pescado - Lubina",
                "timesCooked": 0
            }, {
                "name": "Patatas fritas",
                "timesCooked": 0
            }, {
                "name": "Pasta - Canelones",
                "timesCooked": 0
            }, {
                "name": "Entrecot",
                "timesCooked": 0
            }, {
                "name": "Albóndigas",
                "timesCooked": 0
            }, {
                "name": "Pasta - Ensalada",
                "timesCooked": 0
            }, {
                "name": "Perritos calientes",
                "timesCooked": 1,
                "lastCooked": "18/4/2024"
            }, {
                "name": "Arroz - Blanco Largo",
                "timesCooked": 1,
                "lastCooked": "18/4/2024"
            }, {
                "name": "Arroz - 3 Delicias",
                "timesCooked": 1,
                "lastCooked": "19/4/2024"
            }, {
                "name": "Patatas con huevos estrellados",
                "timesCooked": 1,
                "lastCooked": "21/4/2024"
            }, {
                "name": "Pollo - Alitas",
                "timesCooked": 1,
                "lastCooked": "22/4/2024"
            }, {
                "name": "Sopa con Garbanzos",
                "timesCooked": 1,
                "lastCooked": "22/4/2024"
            }, {
                "name": "Pescado - Gallos",
                "timesCooked": 1,
                "lastCooked": "23/4/2024"
            }, {
                "name": "Pollo - Pechugas a la plancha",
                "timesCooked": 1,
                "lastCooked": "30/4/2024"
            }, {
                "name": "Fabada",
                "timesCooked": 1,
                "lastCooked": "5/5/2024"
            }, {
                "name": "Acelgas",
                "timesCooked": 1,
                "lastCooked": "6/5/2024"
            }, {
                "name": "Pollo - Pechugas empanadas",
                "timesCooked": 2,
                "lastCooked": "6/5/2024"
            }, {
                "name": "Pasta - Macarrones con picadillo",
                "timesCooked": 1,
                "lastCooked": "7/5/2024"
            }, {
                "name": "Ensalada de patata",
                "timesCooked": 1,
                "lastCooked": "10/5/2024"
            }, {
                "name": "Cerdo - Lomo Ibérico",
                "timesCooked": 2,
                "lastCooked": "13/5/2024"
            }, {
                "name": "Guisantes",
                "timesCooked": 2,
                "lastCooked": "13/5/2024"
            }, {
                "name": "Pescado - Salmón",
                "timesCooked": 1,
                "lastCooked": "14/5/2024"
            }, {
                "name": "Arroz - Blanco Bomba",
                "timesCooked": 1,
                "lastCooked": "14/5/2024"
            }, {
                "name": "Fréjoles (Judias Verdes)",
                "timesCooked": 1,
                "lastCooked": "16/5/2024"
            }, {
                "name": "Pasta - Espaguetis",
                "timesCooked": 2,
                "lastCooked": "17/5/2024"
            }, {
                "name": "Huevos rellenos",
                "timesCooked": 1,
                "lastCooked": "17/5/2024"
            }, {
                "name": "Pollo - Asado",
                "timesCooked": 4,
                "lastCooked": "18/5/2024"
            }, {
                "name": "Pan Tumaca",
                "timesCooked": 2,
                "lastCooked": "19/5/2024"
            }, {
                "name": "Tosta Tortilla Francesa",
                "timesCooked": 1,
                "lastCooked": "19/5/2024"
            }, {
                "name": "Cerdo - Lomo adobado",
                "timesCooked": 2,
                "lastCooked": "20/5/2024"
            }, {
                "name": "Puré de verduras",
                "timesCooked": 2,
                "lastCooked": "20/5/2024"
            }, {
                "name": "Bollos de chorizo",
                "timesCooked": 1,
                "lastCooked": "21/5/2024"
            }, {
                "name": "Espinacas con bechamel",
                "timesCooked": 1,
                "lastCooked": "22/5/2024"
            }, {
                "name": "Pollo - Pechugas rebozadas",
                "timesCooked": 1,
                "lastCooked": "22/5/2024"
            }, {
                "name": "Hamburguesa",
                "timesCooked": 1,
                "lastCooked": "23/5/2024"
            }, {
                "name": "Arroz - Amarillo",
                "timesCooked": 2,
                "lastCooked": "24/5/2024"
            }, {
                "name": "Tortilla de patata",
                "timesCooked": 3,
                "lastCooked": "26/5/2024"
            }, {
                "name": "Lentejas",
                "timesCooked": 1,
                "lastCooked": "27/5/2024"
            }, {
                "name": "Bocadillo Calamares",
                "timesCooked": 2,
                "lastCooked": "28/5/2024"
            }]
          return comidas;
      } catch (err) {
          console.error('Error al leer el archivo de comidas:', err);
          return [];
      }
    };

    const imprimirLocalStorage = () => {
      // Obtener el contenido del localStorage
      const localStorageData = JSON.parse(localStorage.getItem('comidas'));

      // Formatear cada objeto en el formato deseado
      const formattedData = localStorageData.map(item => {
          let formattedItem = `${item.name}, ${item.timesCooked}`;
          if (item.lastCooked) {
              formattedItem += `, ${item.lastCooked}`;
          }
          return formattedItem;
      });

      // Unir los elementos formateados con un salto de línea entre ellos
      const textContent = formattedData.join('\n');

      console.log(textContent);
    }

    const inicializarComidas = async () => {
      localStorage.removeItem('comidas');
      let comidas = localStorage.getItem('comidas');
      if (!comidas) {
        comidas = await leerComidasDesdeArchivo();
        localStorage.setItem('comidas', JSON.stringify(comidas));
      } else {
        comidas = JSON.parse(comidas);
      }
      imprimirLocalStorage();
      // console.log(localStorage.getItem('comidas'));
      return comidas;
    };

    const actualizarLocalStorage = (nuevasComidas) => {
      localStorage.setItem('comidas', JSON.stringify(nuevasComidas));
    };

    const handleReloadFromTextFile = () => {
      localStorage.removeItem('comidas');
      inicializarComidas().then(comidas => {
        setFoods(comidas);
      });
    }

    const handleMarkAsCooked = (index) => {
        const updatedFoods = [...foods];
        const today = format(new Date(), 'dd/MM/yyyy');

        // Remove the item from its current position
        const [cookedFood] = updatedFoods.splice(index, 1);

        // Update the cooked food's properties
        cookedFood.timesCooked += 1;
        cookedFood.lastCooked = today;

        // Add the cooked food to the end of the list
        updatedFoods.push(cookedFood);

        // Update the state
        setFoods(updatedFoods);
        
        // Actualizar el localStorage
        actualizarLocalStorage(updatedFoods);
    };

    const handleRename = (index, newName, newTimesCooked, newLastCooked) => {
        const updatedFoods = [...foods];
        updatedFoods[index] = {
            name: newName,
            timesCooked: newTimesCooked,
            lastCooked: newLastCooked
        };
        setFoods(updatedFoods);

        // Actualizar el localStorage
        actualizarLocalStorage(updatedFoods);
    };

    const handleAddFood = (newFoodName) => {
        const newFood = {
            name: newFoodName,
            timesCooked: 0,
            lastCooked: 'Nunca',
        };
        const updatedFoods = [newFood, ...foods];
        setFoods(updatedFoods);
        
        // Actualizar el localStorage
        actualizarLocalStorage(updatedFoods);
    };

    return (
        <div>
            <h1>Gestor de Comidas</h1>
            <ReloadFoods onAddFood={handleAddFood} onReloadFromTextFile={handleReloadFromTextFile} />
            <AddFood onAddFood={handleAddFood} />
            <FoodList foods={foods} onMarkAsCooked={handleMarkAsCooked} onRename={handleRename} />
        </div>
    );
};

export default App;
