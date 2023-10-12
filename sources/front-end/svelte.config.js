import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
      out: 'build',
      precompress: false,
      envPrefix: 'CA_',
    }),
    serviceWorker: {
      register: true,
    },
    files: {
      hooks: {
        server: 'src/files/hooks/server.mjs',
      },
      serviceWorker: 'src/files/sw/service-worker.mjs',
    },
    env: {
      dir: './environments'
    },
	},
};

export default config;