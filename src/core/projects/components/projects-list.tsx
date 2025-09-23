import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
    projectName: string;
    createdAt?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectName, createdAt }) => {
    const creationDate = createdAt || new Date('2024-01-01').toLocaleDateString('en-US');

    return (
        <Card className="hover:shadow-md transition-shadow flex flex-col h-full">
            <CardContent className="flex-1 flex items-start justify-start">
                <span className="text-muted-foreground">{projectName}</span>
            </CardContent>
            <CardFooter className="flex justify-start">
                <span className="text-sm text-muted-foreground">
                    Created {creationDate}
                </span>
            </CardFooter>
        </Card>
    );
};

const projects = [
    { name: 'Website Redesign', createdAt: '2024-01-15' },
    { name: 'Mobile App', createdAt: '2024-02-20' },
    { name: 'API Development', createdAt: '2024-03-10' },
    { name: 'Dashboard UI', createdAt: '2024-04-05' }
];

export const ProjectsList = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Projects</h2>
                <Button size="sm">Add Project</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        projectName={project.name}
                        createdAt={project.createdAt}
                    />
                ))}
            </div>
        </div>
    );
};