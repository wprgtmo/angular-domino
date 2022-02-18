
  export const NombreEstado= (estado?: string): string  => {
    switch (estado) {
      case "C": return "Creado"; break;
      case "I": return "Iniciado"; break;
      case "F": return "Finalizado"; break;
      default: return ""; break;
    }
  }

  export const NombreEstadoF= (estado?: string): string  => {
    switch (estado) {
      case "C": return "Creada"; break;
      case "I": return "Iniciada"; break;
      case "F": return "Finalizada"; break;
      default: return ""; break;
    }
  }
