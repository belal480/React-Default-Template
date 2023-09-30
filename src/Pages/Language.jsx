
const Language = () => {
    const skills = [
        { name: 'HTML', percentage: 90 },
        { name: 'CSS', percentage: 85 },
        { name: 'Tailwind CSS', percentage: 80 },
        { name: 'Bootstrap', percentage: 75 },
        { name: 'Basic JavaScript', percentage: 70 },
        { name: 'Basic React', percentage: 65 },
    ];

    return (
        <section id="skills" className="bg-gray-100 py-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0">
                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">My Skills</h2>
                    <ul>
                        {skills.map((skill, index) => (
                            <li key={index} className="flex items-center mb-2">
                                <span className="w-1/3 font-semibold">{skill.name}</span>
                                <div className="w-2/3">
                                    <div className="relative pt-1">
                                        <div className="flex mb-2 items-center justify-between">
                                            <div>
                                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                                                    {skill.percentage}%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="h-2 bg-gray-200 rounded-full">
                                            <div
                                                style={{ width: `${skill.percentage}%` }}
                                                className="h-full text-center text-xs text-white bg-teal-600 rounded-full"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <img
                        src="https://cdn.becomeopedia.com/wp-content/uploads/software-developer-6521720_960_720.jpg"
                        alt="Your Image"
                        className="w-full h-auto max-w-xs mx-auto md:max-w-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Language;
