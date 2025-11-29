
export default function PoliticaDeCookiesPage() {
    return (
        <main className="flex-1">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                <article className="prose prose-invert max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold font-headline mb-8 tracking-wider">Política de Cookies</h1>
                    

                    <h2 className="text-2xl font-bold font-headline mt-8 mb-4 tracking-wider">¿Qué son las cookies?</h2>
                    <p>
                        Una cookie es un pequeño fichero de texto que un sitio web almacena en el navegador del usuario. Las cookies facilitan el uso y la navegación por una página web y son esenciales para el funcionamiento de internet, aportando innumerables ventajas en la prestación de servicios interactivos.
                    </p>

                    <h2 className="text-2xl font-bold font-headline mt-8 mb-4 tracking-wider">¿Qué tipos de cookies utiliza esta página web?</h2>
                    <p>Este sitio web utiliza los siguientes tipos de cookies:</p>

                    <h3 className="text-xl font-semibold mt-6 mb-2">Cookies propias:</h3>
                    <p>
                        Son cookies estrictamente necesarias. Permiten la interacción del usuario por el sitio web utilizando todas sus funciones. (Duración entre 23 días y tres meses).
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">Cookies de Analítica (Google Analytics):</h3>
                    <p>
                        Este sitio web utiliza cookies de Google Analytics para recopilar estadísticas anónimas sobre el uso del sitio. Estas cookies nos ayudan a entender cómo los visitantes interactúan con el sitio web, recopilando información de forma anónima.
                    </p>
                    <ul>
                        <li><strong>Nombre de la cookie:</strong> _ga, _gid, _gat</li>
                        <li><strong>Finalidad:</strong> Medir y analizar la navegación de los usuarios.</li>
                        <li><strong>Proveedor:</strong> Google Inc.</li>
                        <li><strong>Más información:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Centro de privacidad de Google</a></li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-6 mb-2">Cookies de terceros para redes sociales:</h3>
                    <p>
                        Se utilizan para que los visitantes puedan interactuar con el contenido de diferentes plataformas sociales (Facebook, YouTube, Twitter, LinkedIn, etc.) y que se generan únicamente para los usuarios de dichas redes sociales. Las condiciones de utilización de estas cookies y la información recopilada se regulan por la política de privacidad de la plataforma social correspondiente.
                    </p>

                    <h2 className="text-2xl font-bold font-headline mt-8 mb-4 tracking-wider">¿Cómo puedo gestionar las cookies?</h2>
                    <p>
                        Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en tu ordenador. A continuación te ofrecemos enlaces en los que encontrarás información sobre cómo puedes activar tus preferencias en los principales navegadores:
                    </p>
                    <ul>
                        <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                        <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                        <li><a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">Internet Explorer</a></li>
                        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
                    </ul>
                    
                    <p className="mt-8">
                        Para más información sobre el tratamiento de datos personales, te recomendamos visitar nuestra <a href="/politica-de-privacidad">Política de Privacidad</a>.
                    </p>

                    <p className="mt-8">Última actualización: [Fecha de la última actualización]</p>
                </article>
            </div>
        </main>
    );
}
