function Animated_Carrousell() {
  return (
    <>

<div className="relative font-inter antialiased">

<div className="relative  flex flex-col justify-center overflow-hidden">
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-2">
        <div className="text-center">

            <div
                x-data="{}"
                x-init="$nextTick(() => {
                    let ul = $refs.logos;
                    ul.insertAdjacentHTML('afterend', ul.outerHTML);
                    ul.nextSibling.setAttribute('aria-hidden', 'true');
                })"
                className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
                <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    <li>
                        <img src="https://www.vectorlogo.zone/logos/sas/sas-ar21.svg" alt="Facebook" />
                    </li>
                    <li>
                        <img src="https://www.vectorlogo.zone/logos/habitica/habitica-ar21.svg" alt="Disney" />
                    </li>
                    <li>
                        <img src="https://www.vectorlogo.zone/logos/freebsd/freebsd-ar21.svg" alt="Airbnb" />
                    </li>
                    <li>
                        <img src="https://www.vectorlogo.zone/logos/includeos/includeos-ar21.svg" alt="Apple" />
                    </li>
                    <li>
                        <img src="https://www.vectorlogo.zone/logos/samsung/samsung-ar21.svg" alt="Spark" />
                    </li>
                    <li>
                        <img src="https://www.vectorlogo.zone/logos/quora/quora-ar21.svg" alt="Samsung" />
                    </li>
                    <li>
                        <img src="https://www.vectorlogo.zone/logos/airbnb/airbnb-ar21.svg" alt="Quora" />
                    </li>
                    <li>
                        <img src="https://www.vectorlogo.zone/logos/apple/apple-ar21.svg" alt="Sass" />
                    </li>
                </ul>                
            </div>
            
        </div>

    </div>
</div>
</div>

    </>
  );
}

export default Animated_Carrousell;
