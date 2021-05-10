module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 8180),
    admin: {
        auth: {
            secret: env('ADMIN_JWT_SECRET', '57124fa73b411221100cc1d7b0688602'),
        },
    },
});