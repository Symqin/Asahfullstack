export function validateProps(schema, props, componentName) {
    const { error } = schema.validate(props, { abortEarly: false });

    if (error) {
        error.details.forEach((detail) => {
            console.warn(`[${componentName}] ${detail.message}`);
        });
    }
}