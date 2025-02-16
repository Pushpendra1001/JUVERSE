import React, { useState, useEffect } from "react";

function Team() {
    const [teamData, setTeamData] = useState({});

    useEffect(() => {
        fetch("/Team.json")
            .then((response) => response.json())
            .then((data) => setTeamData(data))
            .catch((error) => console.error("Error fetching team data:", error));
    }, []);

    return (
        <div className="min-h-screen px-6 py-12 md:px-16">
            {/* Back to Website Button */}
         


            <a
                href="/" className="fixed top-[9%] right-20">
                <button class="ui-btn rounded-md bg-teal-500/10">
                    <span className='text-green-100 '>
                         Back to website
                    </span>
                </button>
            </a>


            <div className="flex justify-center items-center min-h-[10vh] text-center">
                <h1 className="text-4xl md:text-5xl font-bold">Team Introduction</h1>
            </div>
            <div className="min-h-[85vh] mt-6">
                {Object.entries(teamData).map(([domain, members]) => (
                    <div key={domain} className="mb-12">
                        <h1 className="mt-8 mb-6 text-2xl md:text-3xl font-semibold">{domain}</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {members.map((member, index) => (
                                <div
                                    key={index}
                                    className="h-40 w-full sm:w-64 border rounded-xl flex items-center justify-center text-lg font-medium shadow-md"
                                >
                                    {member.name}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;
