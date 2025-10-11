
function SmallFog() {
    return (
        <>
            <div className="absolute -top-4 bg-purple-300 dark:bg-purple-500 h-20 w-20 lg:h-40 lg:w-40 rounded-full blur-xl mix-blend-multiply dark:mix-blend-normal dark:opacity-60 animate-scaleUp"></div>
            <div className="absolute -left-1/5 -bottom-2 bg-orange-300 dark:bg-orange-500 h-20 w-20 lg:h-40 lg:w-40 rounded-full blur-xl mix-blend-multiply dark:mix-blend-normal dark:opacity-60 animate-scaleLeftDown animation-delay-1000"></div>
            <div className="absolute -right-1/5 -bottom-2 bg-red-300 dark:bg-red-500 h-20 w-20 lg:h-40 lg:w-40 rounded-full blur-xl mix-blend-multiply dark:mix-blend-normal dark:opacity-60 animate-scaleRightDown animation-delay-2000"></div>
        </>
    )
}

export default SmallFog;