import React, { useEffect, useState } from 'react';
import { resumeData } from '../data';



interface Process {
    pid: number;
    user: string;
    pri: number;
    ni: number;
    virt: string;
    res: string;
    shr: string;
    s: string;
    cpu: number;
    mem: number;
    time: string;
    command: string;
}

const SystemMonitor: React.FC = () => {
    const [processes, setProcesses] = useState<Process[]>([]);

    useEffect(() => {
        // Transform skills into "processes"
        const allSkills = [
            ...resumeData.skills["Cloud & DevOps"],
            ...resumeData.skills["DevSecOps & Security"],
            ...resumeData.skills["Development & Automation"],
            ...resumeData.skills["Data & Observability"]
        ];

        const initialProcs = allSkills.map((skill, i) => ({
            pid: 1000 + i,
            user: 'anthony',
            pri: 20,
            ni: 0,
            virt: `${(Math.random() * 500 + 100).toFixed(0)}M`,
            res: `${(Math.random() * 100 + 20).toFixed(0)}M`,
            shr: `${(Math.random() * 50 + 5).toFixed(0)}M`,
            s: 'R',
            cpu: Math.random() * 5.0, // Initial random CPU
            mem: Math.random() * 2.0,
            time: `0:${(Math.random() * 59).toFixed(0).padStart(2, '0')}.${(Math.random() * 99).toFixed(0).padStart(2, '0')}`,
            command: skill
        }));

        setProcesses(initialProcs);

        const interval = setInterval(() => {
            setProcesses(prev => prev.map(p => ({
                ...p,
                cpu: Math.max(0, p.cpu + (Math.random() - 0.5) * 2), // Jitter CPU
                time: p.s === 'R' ? updateTime(p.time) : p.time
            })).sort((a, b) => b.cpu - a.cpu)); // Sort by CPU usage like top
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const updateTime = (timeStr: string) => {
        // Simple fake time increment
        // stored as M:SS.ms
        // We'll just ignore real logic and return a random increment for visual noise if needed, 
        // or just leave it static to save complexity. Real htop time increments.
        return timeStr;
    };

    return (
        <div className="w-full h-full bg-black text-xs font-mono overflow-hidden flex flex-col p-1">
            {/* Header Stats Imitation */}
            <div className="mb-2 grid grid-cols-2 gap-4 text-xs font-bold">
                <div>
                    <span className="text-cyan-400">1</span>  [<span className="text-green-500">||||||||||||||||||||||||||||||||||</span><span className="text-red-500">|||</span> 92.4%]
                    <br />
                    <span className="text-cyan-400">2</span>  [<span className="text-green-500">|||||||||||||||||||||</span><span className="text-red-500">|</span> 65.1%]
                </div>
                <div>
                    <div>Tasks: <span className="text-white">{processes.length}</span> total, <span className="text-green-500">1</span> running</div>
                    <div>Load average: <span className="text-white">1.02 1.15 1.05</span></div>
                    <div>Uptime: <span className="text-white">5 years, 213 days</span></div>
                </div>
            </div>

            {/* Header Row */}
            <div className="flex bg-slate-800 text-black font-bold px-1 mb-1">
                <span className="w-12">PID</span>
                <span className="w-16">USER</span>
                <span className="w-8">PRI</span>
                <span className="w-8">NI</span>
                <span className="w-16">VIRT</span>
                <span className="w-16">RES</span>
                <span className="w-16">SHR</span>
                <span className="w-4">S</span>
                <span className="w-12">CPU%</span>
                <span className="w-12">MEM%</span>
                <span className="w-20">TIME+</span>
                <span className="flex-1">Command</span>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto scrollbar-hide">
                {processes.map(p => (
                    <div key={p.pid} className="flex hover:bg-slate-800 hover:text-white px-1 cursor-default">
                        <span className="w-12 text-green-400">{p.pid}</span>
                        <span className="w-16">{p.user}</span>
                        <span className="w-8">{p.pri}</span>
                        <span className="w-8">{p.ni}</span>
                        <span className="w-16">{p.virt}</span>
                        <span className="w-16">{p.res}</span>
                        <span className="w-16">{p.shr}</span>
                        <span className="w-4">{p.s}</span>
                        <span className="w-12 text-green-400">{p.cpu.toFixed(1)}</span>
                        <span className="w-12 text-green-400">{p.mem.toFixed(1)}</span>
                        <span className="w-20 text-cyan-400">{p.time}</span>
                        <span className="flex-1 truncate text-white ml-2">{p.command}</span>
                    </div>
                ))}
            </div>

            <div className="mt-1 bg-slate-900 text-slate-400 px-1">
                F1Help  F2Setup  F3Search  F4Filter  F5Tree  F6SortBy  F7Nice -  F8Nice +  F9Kill  F10Quit
            </div>
        </div>
    );
};

export default SystemMonitor;
