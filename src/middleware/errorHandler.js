export const errorHandler = (error, req, res, next) => {
console.error(error.stack);

if(error.message.includes('in JSON at position') || error.message.includes('not valid JSON')) {
    return res.status(500).json({
        message:'Erro no JSON envido na requisição.'
    })
}

res.status(500).json({
    message:'Opss.. Error interno no servidor! Tente novamente mais tarde.',
    error: error.message
})
}