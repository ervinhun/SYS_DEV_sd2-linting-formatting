import fs from 'fs';
import path from 'path';

export default function (plop) {
    plop.setGenerator('component', {
        description: 'Generate a React component for a given module',
        prompts: [
            {
                type: 'input',
                name: 'module',
                message: 'Enter the module name (e.g. rooms):',
                validate: (value) => {
                    if (!value || !/^[a-z][a-z0-9-]*$/.test(value))
                        return 'Module name must be lowercase and valid (e.g. rooms, user-profile)';
                    return true;
                },
            },
            {
                type: 'input',
                name: 'name',
                message: 'Enter the component name (e.g. CloseButton):',
                validate: function (value, { module }) {
                    if (!value || !/^[A-Z][A-Za-z0-9]*$/.test(value))
                        return 'Component name must be in PascalCase (e.g. CloseButton)';

                    const componentPath = path.join(
                        'src/features',
                        module,
                        'components',
                        `${value}.tsx`
                    );
                    if (fs.existsSync(componentPath)) {
                        return `Component "${value}" already exists in module "${module}".`;
                    }

                    return true;
                },
            },
        ],
        actions: function (data) {
            const modulePath = path.join('src/features', data.module);
            const componentsPath = path.join(modulePath, 'components');

            // Ensure module and component folders exist
            const actions = [];

            if (!fs.existsSync(modulePath)) {
                actions.push({
                    type: 'add',
                    path: path.join(modulePath, '.gitkeep'),
                    template: '',
                    skipIfExists: true,
                });
            }

            if (!fs.existsSync(componentsPath)) {
                fs.mkdirSync(componentsPath, { recursive: true });
            }

            actions.push({
                type: 'add',
                path: path.join(componentsPath, '{{pascalCase name}}.tsx'),
                templateFile: 'plop-templates/component.tsx.hbs',
            });

            return actions;
        },
    });
}
