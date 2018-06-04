stream
    .pipe(
        map(v => v.data),
        filter(d => d.type === 'foo')
        // etc
    );