const Faq = () => {
    return (
        <div className="max-w-7xl mx-auto my-20">
            <h2 className="text-center text-4xl font-bold  font-serif"><span className="text-yellow-400">Frequently Asked</span> Question</h2>
            <div className="flex flex-col lg:flex-row justify-center items-center font-mono">
                <div className="w-1/2">
                    <img className="" src="https://i.ibb.co/N7XyCBQ/undraw-Questions-re-1fy7-1.png" alt="" />
                </div>
                <div className="w-1/2">
                    <div className="collapse w-full lg:w-[80%] collapse-plus my-5 bg-base-200">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-base md:text-xl md:font-medium">
                            What is Study Buddy Hub?
                        </div>
                        <div className="collapse-content text-xs md:text-base">
                            <p> Study Buddy Hub is an online platform designed to facilitate collaborative learning through virtual study groups. It connects students and learners, allowing them to study together, share knowledge, and support one another in their educational journeys.</p>
                        </div>
                    </div>
                    <div className="collapse lg:w-[80%] collapse-plus my-5 bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-base md:text-xl md:font-medium">
                        Is my data and privacy secure on Study Buddy Hub?
                        </div>
                        <div className="collapse-content text-xs md:text-base">
                            <p>We take data security and privacy seriously. Your personal information and study group interactions are protected through encryption and strict privacy controls. We do not share your data with third parties without your consent.</p>
                        </div>
                    </div>
                    <div className="collapse w-full lg:w-[80%] collapse-plus my-5 bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-base md:text-xl md:font-medium">
                            Is Study Buddy Hub free to use?
                        </div>
                        <div className="collapse-content text-xs md:text-base">
                            <p>Yes, Study Buddy Hub offers a free basic membership that includes essential features such as creating and joining study groups. However, we also offer premium subscription plans with additional benefits and advanced features to enhance your learning experience.

                                Q4: How can I cre</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;