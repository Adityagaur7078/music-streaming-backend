function authorize(...roles) {
    return (req, res, next) => {
        try {
            const token = req.cookies.token;

            if (!token) {
                return res.status(401).json({
                    success: false,
                    message: "Unauthorized",
                });
            }

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            if (!roles.includes(decoded.role)) {
                return res.status(403).json({
                    success: false,
                    message: "Forbidden",
                });
            }

            req.user = decoded;

            next();
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: "Invalid or expired token",
            });
        }
    };
}