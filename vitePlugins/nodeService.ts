import { Plugin, ViteDevServer } from 'vite';
import multiparty from 'multiparty';
import fs from 'fs';
import path from 'path';

const LOCAL_IMG_PATH = path.resolve(__dirname, '../dev/public/temp.local');

export default (): Plugin => {
  return {
    name: 'node-service',
    configureServer: (server: ViteDevServer) => {
      server.middlewares.use(async (req, res, next) => {
        if (/^\/api\/img\/upload$/.test(req.url)) {
          if (!fs.existsSync(LOCAL_IMG_PATH)) {
            fs.mkdirSync(LOCAL_IMG_PATH);
          }

          const form = new multiparty.Form({
            uploadDir: LOCAL_IMG_PATH
          });

          form.parse(req, (err, fields, files) => {
            const filename = files.file[0].path.split('md-editor-v3/dev/public')[1];

            res.end(
              JSON.stringify({
                code: 0,
                url: filename
              })
            );
          });
        } else {
          next();
        }
      });
    }
  };
};
