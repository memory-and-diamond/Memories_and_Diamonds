const AboutUs = () => {
    return (
        <section className="pt-28 pb-12 bg-white text-center">
            <h1 style={{ fontFamily: 'Dancing Script, cursive' }} className="text-3xl text-center mx-auto sm:text-4xl md:text-5xl lg:text-7xl mb-8 drop-shadow-xl">
                Memory & diamond
            </h1>
            <div className="flex">
                <img src='/Images/aboutBg.jpg' alt="Wedding Hall" className="rounded-md h-96 mb-8 hidden sm:block" />
                <div className="px-4 sm:px-20">
                    <p className="text-gray-700 text-lg mb-6">
                        At <span className="font-bold">"Memory & diamond"</span>, we believe in creating magical moments that last a lifetime. Our exquisite
                        wedding hall provides the perfect backdrop for your special day.
                    </p>
                    <p className="text-gray-700 text-lg mb-6">
                        Our dedicated team of professionals is passionate about turning your dreams into reality. From the finest
                        details of decor to personalized catering, we are committed to making your wedding day extraordinary.
                    </p>
                    <p className="text-gray-700 text-lg mb-6">
                        Step into a world of elegance and charm. Let <span className="font-bold">"Memory & diamond  "</span> be the canvas for your love story. We
                        understand the importance of this day and strive to make it uniquely yours.
                    </p>
                    <p className="text-gray-700 text-lg mb-6">
                        Contact us today to schedule a tour and start planning the wedding of your dreams. We look forward to being a
                        part of your journey.
                    </p>
                    <div className="flex max-md:flex-col justify-around pt-7 mt-5 border-t border-black">
                        <div className="flex items-center gap-2 mb-5">
                            <img width="25" height="25" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-at-digital-marketing-tanah-basah-glyph-tanah-basah.png" alt="external-at-digital-marketing-tanah-basah-glyph-tanah-basah" />
                            <p>memory.diamond@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-2 mb-5">
                            <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/phone.png" alt="phone" />
                            <p>+212 600-00000</p>
                        </div>
                        <div className="flex items-center gap-2 mb-5">
                            <img width="25" height="25" src="https://img.icons8.com/windows/32/instagram-new.png" alt="instagram-new" />
                            <p>Memory And Diamond"</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
