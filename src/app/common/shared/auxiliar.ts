
  export const NombreEstado= (estado?: string): string  => {
    switch (estado) {
      case "C": return "Creado"; break;
      case "I": return "Iniciado"; break;
      case "F": return "Finalizado"; break;
      default: return "Sin estado"; break;
    }
  }
