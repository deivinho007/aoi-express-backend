import jwt from 'jsonwebtoken';
export const authenticator = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'Não Autorizado' });
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token inválido' });
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.userLogged = payload;
    } catch (err) {
        return res.status(401).json({ message: 'Token inválido' });
    }
next();
}


