
function AIFog() {
    return (
        <>
            <div className="absolute -top-5 bg-purple-300 h-54 w-54 lg:h-78 lg:w-78 rounded-full blur-xl mix-blend-multiply animate-scaleUp"></div>
            <div className="absolute -top-5 -left-10 bg-orange-300 h-54 w-54 lg:h-78 lg:w-78 rounded-full blur-xl mix-blend-multiply animate-scaleLeftUp animation-delay-1000"></div>
            <div className="absolute -top-5 -right-10 bg-red-300 h-54 w-54 lg:h-78 lg:w-78 rounded-full blur-xl mix-blend-multiply animate-scaleRightUp animation-delay-2000"></div>
            <div className="absolute -left-10 bg-purple-300 h-54 w-54 lg:h-78 lg:w-78 rounded-full blur-xl mix-blend-multiply animate-scaleLeft"></div>
            <div className="absolute bg-red-300 h-54 w-54 lg:h-78 lg:w-78 rounded-full blur-2xl mix-blend-multiply"></div>
            <div className="absolute -right-10 bg-purple-300 h-54 w-54 lg:h-78 lg:w-78 rounded-full blur-xl mix-blend-multiply animate-scaleRight"></div>
            <div className="absolute -bottom-5 bg-purple-300 h-54 w-54 lg:h-78 lg:w-78 rounded-full blur-2xl mix-blend-multiply animate-scaleDown animation-delay-3000"></div>
            <div className="absolute -bottom-5 -left-10 bg-red-300 h-54 w-54 lg:h-78 lg:w-78 rounded-full blur-2xl mix-blend-multiply animate-scaleLeftDown"></div>
            <div className="absolute -bottom-5 -right-10 bg-orange-300 h-54 w-54 lg:h-78 lg:w-78rounded-full blur-2xl mix-blend-multiply animate-scaleRightDown animation-delay-1000"></div>
        </>
    )
}

export default AIFog;