function AIFog() {
  return (
    <>
      <div className="absolute -top-5 bg-purple-300 dark:bg-purple-500 h-54 w-54 lg:h-78 lg:w-78 rounded-full blur-xl mix-blend-multiply dark:mix-blend-normal dark:opacity- animate-scaleUp opacity-70"></div>
      <div className="absolute -top-5 -left-10 bg-orange-300 dark:bg-orange-500 h-54 w-54 lg:h-78 lg:w-78 rounded-full blur-xl mix-blend-multiply dark:mix-blend-normal dark:opacity- animate-scaleLeftUp animation-delay-1000 opacity-70"></div>
      <div className="absolute -top-5 -right-10 bg-red-300 dark:bg-red-500 h-54 w-54 lg:h-78 lg:w-78 rounded-full blur-xl mix-blend-multiply dark:mix-blend-normal dark:opacity- animate-scaleRightUp animation-delay-2000 opacity-70"></div>
      <div className="absolute -left-10 bg-purple-300 dark:bg-purple-500 h-54 w-54 lg:h-78 lg:w-78 rounded-full blur-xl mix-blend-multiply dark:mix-blend-normal dark:opacity- animate-scaleLeft opacity-70"></div>
      <div className="absolute bg-red-300 dark:bg-red-500 h-54 w-54 lg:h-78 lg:w-78 rounded-full blur-2xl mix-blend-multiply dark:mix-blend-normal dark:opacity- opacity-70"></div>
      <div className="absolute -right-10 bg-purple-300 dark:bg-purple-500 h-54 w-54 lg:h-78 lg:w-78 rounded-full blur-xl mix-blend-multiply dark:mix-blend-normal dark:opacity- animate-scaleRight opacity-70"></div>
      <div className="absolute -bottom-5 bg-purple-300 dark:bg-purple-500 h-54 w-54 lg:h-78 lg:w-78 rounded-full blur-2xl mix-blend-multiply dark:mix-blend-normal dark:opacity- animate-scaleDown animation-delay-3000 opacity-70"></div>
      <div className="absolute -bottom-5 -left-10 bg-red-300 dark:bg-red-500 h-54 w-54 lg:h-78 lg:w-78 rounded-full blur-2xl mix-blend-multiply dark:mix-blend-normal dark:opacity- animate-scaleLeftDown opacity-70"></div>
      <div className="absolute -bottom-5 -right-10 bg-orange-300 dark:bg-orange-500 h-54 w-54 lg:h-78 lg:w-78 rounded-full blur-2xl mix-blend-multiply dark:mix-blend-normal dark:opacity- animate-scaleRightDown animation-delay-1000 opacity-70"></div>
    </>
  );
}

export default AIFog;