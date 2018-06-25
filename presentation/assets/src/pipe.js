// v5-
stream
    .map(v => v.data)
    .filter(d => d.type === 'foo')
    /* etc */;

// v6+
stream
    .pipe(
        map(v => v.data),
        filter(d => d.type === 'foo')
        // etc
    );
