import React, { useState, useEffect, useRef } from 'react';
import { X, Minus, Square, Terminal as TerminalIcon } from 'lucide-react';
import { resumeData } from '../data';
import SystemMonitor from './SystemMonitor';

interface Command {
    input: string;
    output: React.ReactNode;
}

interface TerminalProps {
    isOpen: boolean;
    onClose: () => void;
    onToggleMatrix: () => void;
    isMatrixActive: boolean;
}

const Terminal: React.FC<TerminalProps> = ({ isOpen, onClose, onToggleMatrix, isMatrixActive }) => {
    const [history, setHistory] = useState<Command[]>([
        { input: '', output: 'Welcome to AnthonyOS v1.0.0. Type "help" for available commands.' }
    ]);
    const [input, setInput] = useState('');
    const [viewMode, setViewMode] = useState<'cli' | 'monitor'>('cli');
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen && bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
            inputRef.current?.focus();
        }
    }, [history, isOpen]);

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        let output: React.ReactNode = '';

        switch (trimmedCmd) {
            case 'help':
                output = (
                    <div className="space-y-1 text-slate-300">
                        <p>Available commands:</p>
                        <div className="grid grid-cols-[100px_1fr] gap-2">
                            <span className="text-yellow-400">whoami</span><span>Display bio and contact info</span>
                            <span className="text-yellow-400">ls</span><span>List resume sections</span>
                            <span className="text-yellow-400">cat [file]</span><span>Read a section (e.g., "cat skills")</span>
                            <span className="text-yellow-400">clear</span><span>Clear terminal history</span>
                            <span className="text-yellow-400">matrix</span><span>Toggle the Matrix</span>
                            <span className="text-yellow-400">htop</span><span>Monitor system resources</span>
                            <span className="text-yellow-400">exit</span><span>Close terminal</span>
                        </div>
                    </div>
                );
                break;
            case 'whoami':
                output = (
                    <div className="text-cyan-300">
                        <p className="font-bold text-lg">{resumeData.name}</p>
                        <p>{resumeData.title}</p>
                        <p className="text-slate-400">{resumeData.profile}</p>
                    </div>
                );
                break;
            case 'ls':
                output = (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-green-400">
                        <span>profile.txt</span>
                        <span>experience.log</span>
                        <span>skills.json</span>
                        <span>education.db</span>
                        <span>projects.git</span>
                        <span>certs.pem</span>
                    </div>
                );
                break;
            case 'clear':
                setHistory([]);
                return;
            case 'matrix':
                onToggleMatrix();
                if (isMatrixActive) {
                    output = <span className="text-blue-400 font-bold">The illusion dissolves... Welcome back to the real world.</span>;
                } else {
                    output = <span className="text-green-500 font-bold">Wake up, Neo... The Matrix has you.</span>;
                }
                setTimeout(() => onClose(), 2000); // Give them a moment to read it
                break;
            case 'htop':
                setViewMode('monitor');
                return;
            case 'exit':
                onClose();
                return;
            default:
                if (trimmedCmd.startsWith('cat ')) {
                    const file = trimmedCmd.replace('cat ', '');
                    switch (file) {
                        case 'profile.txt': output = resumeData.profile; break;
                        case 'skills.json': output = JSON.stringify(resumeData.skills, null, 2); break;
                        case 'experience.log':
                            output = resumeData.experience.map(e => `${e.title} @ ${e.company} (${e.period})`).join('\n');
                            break;
                        case 'education.db':
                            output = resumeData.education.map(e => `${e.title} - ${e.institution} (${e.date})`).join('\n');
                            break;
                        case 'projects.git':
                            output = resumeData.projects.map(p => `* ${p.title}: ${p.description}`).join('\n\n');
                            break;
                        case 'certs.pem':
                            output = resumeData.certifications.map(c => `[CERT] ${c.title} by ${c.issuer}`).join('\n');
                            break;
                        default: output = `cat: ${file}: No such file or directory`;
                    }
                } else if (trimmedCmd !== '') {
                    output = `Command not found: ${trimmedCmd}. Type "help" for assistance.`;
                }
        }

        if (trimmedCmd !== 'clear') {
            setHistory(prev => [...prev, { input: cmd, output }]);
        }
    };

    // Track where we are in the tab cycle - essential for that authentic Linux feel!
    const tabState = useRef({
        isActive: false,
        matches: [] as string[],
        index: 0
    });

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Tab') {
            e.preventDefault();

            // If they keep hitting tab, just keep cycling through the options.
            if (tabState.current.isActive && tabState.current.matches.length > 0) {
                const nextIndex = (tabState.current.index + 1) % tabState.current.matches.length;
                tabState.current.index = nextIndex;
                setInput(tabState.current.matches[nextIndex]);
                return;
            }

            const trimmedInput = input.trim();
            if (!trimmedInput) return;

            const commands = ['help', 'whoami', 'ls', 'cat', 'clear', 'exit', 'matrix', 'htop'];
            const files = ['profile.txt', 'experience.log', 'skills.json', 'education.db', 'projects.git', 'certs.pem'];

            let possibleMatches: string[] = [];

            // Special handling for 'cat' - because everyone tries to cat files first.
            if (trimmedInput.startsWith('cat ')) {
                const partialFile = trimmedInput.slice(4);
                const matchingFiles = files.filter(f => f.startsWith(partialFile));
                possibleMatches = matchingFiles.map(f => `cat ${f}`);
            }
            // Standard command completion.
            else {
                // Be helpful: autocomplete files even without 'cat' if they're lazy (like me).
                const allCandidates = [...commands, ...files];
                possibleMatches = allCandidates.filter(c => c.startsWith(trimmedInput));
            }

            if (possibleMatches.length > 0) {
                tabState.current = {
                    isActive: true,
                    matches: possibleMatches,
                    index: 0
                };
                setInput(possibleMatches[0]);
            }
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        // User typed something? Reset the cycle state so we don't complete weird stuff.
        tabState.current = {
            isActive: false,
            matches: [],
            index: 0
        };
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleCommand(input);
        setInput('');
        // Clean slate after a command runs.
        tabState.current = {
            isActive: false,
            matches: [],
            index: 0
        };
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-up">
            <div className="w-full max-w-3xl bg-[#1e1e1e] rounded-lg shadow-2xl border border-slate-700 overflow-hidden flex flex-col h-[600px] font-mono text-sm">
                {/* Title Bar */}
                <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-slate-700 select-none">
                    <div className="flex items-center gap-2 text-slate-400">
                        <TerminalIcon size={16} />
                        <span className="font-bold">anthony@devops-resume: ~</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={onClose} className="p-1 hover:bg-slate-700 rounded transition-colors text-slate-400"><Minus size={14} /></button>
                        <button className="p-1 hover:bg-slate-700 rounded transition-colors text-slate-400"><Square size={12} /></button>
                        <button onClick={onClose} className="p-1 hover:bg-red-500 hover:text-white rounded transition-colors text-slate-400"><X size={14} /></button>
                    </div>
                </div>

                {/* Terminal Content or Monitor */}
                {viewMode === 'monitor' ? (
                    <div className="flex-1 relative" onClick={() => setViewMode('cli')}>
                        <SystemMonitor />
                        {/* Overlay to hint how to exit */}
                        <div className="absolute bottom-1 right-2 text-xs text-slate-500 opacity-50">Click anywhere to return to shell</div>
                    </div>
                ) : (
                    <div className="flex-1 p-4 overflow-y-auto space-y-2 text-slate-200" onClick={() => inputRef.current?.focus()}>
                        {history.map((entry, i) => (
                            <div key={i} className="space-y-1">
                                {entry.input && (
                                    <div className="flex gap-2">
                                        <span className="text-green-400 font-bold">➜</span>
                                        <span className="text-cyan-400">~</span>
                                        <span>{entry.input}</span>
                                    </div>
                                )}
                                <div className="pl-4 whitespace-pre-wrap">{entry.output}</div>
                            </div>
                        ))}

                        <form onSubmit={handleSubmit} className="flex gap-2 items-center">
                            <span className="text-green-400 font-bold">➜</span>
                            <span className="text-cyan-400">~</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                className="bg-transparent border-none outline-none flex-1 text-slate-200 focus:ring-0 p-0"
                                autoFocus
                                spellCheck="false"
                                autoComplete="off"
                            />
                        </form>
                        <div ref={bottomRef} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Terminal;
