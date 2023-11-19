import { useEffect, useState } from "react";
import CarouselHome from "../Components/CarouselHome/CarouselHome"
import CategoriasSelector from "../Components/CategoriasSelector/CategoriasSelector"
import CategoriasTareas from "../Components/CategoriasTareas/CategoriasTareas"
import { TaskService } from "../services/TaskService";
import { Task } from "../types/Task";

const LandingPage = () => {

  const [tasks, setTask] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]) //Estado para almacenar tareas fitradas
  const [selectedCategory, setSelectedCategory] = useState<string>(''); //Estado para la categoría seleccionada

  useEffect(() => {
    const fetchTasks = async () => {
      const taskData = await TaskService.getAllTasks();
      setTask(taskData);
    };
    fetchTasks();
  }, []);
  
  //Efecto para filtrar las tareas cuando se selecciona una categoría
  useEffect(()=>{
    if (selectedCategory){
      const filtered =tasks.filter(task => task.estado.toUpperCase() === selectedCategory.toUpperCase());
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(tasks); // Si no hay categoría seleccionada, mostrar todas las tareas
    }
  }, [selectedCategory, tasks]);
  
  return (
    <>
        <CarouselHome/>
        <CategoriasSelector onSelectedCategory={setSelectedCategory}/>
        <CategoriasTareas tasks={filteredTasks.length > 0 ? filteredTasks: tasks}/>
    </>
  )
}

export default LandingPage