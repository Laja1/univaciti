export const getSpecialization = (specialization: string) => {
    switch (specialization.toUpperCase()) {
      case "JAVA":
        return "bg-green-50 text-green-800 border-green-500 text-[10px]";
      case "AI":
        return "bg-amber-50 text-amber-800 border-amber-500 text-[10px]";
      case "CLOUD ENGINEERING":
        return "bg-purple-50 text-purple-800 border-purple-500 text-[10px]";
      case "SOFTWARE ENGINEERING":
        return "bg-orange-50 text-orange-800 border-orange-500 text-[10px]";
      case "QA":
        return "bg-red-50 text-red-800 border-red-500 text-[10px]";
      default:
        return "bg-indigo-50 text-indigo-800 border-indigo-300 text-[10px]";
    }
  };