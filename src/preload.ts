import { ipcRenderer } from 'electron';

(window as any).changeSize = () => {
    ipcRenderer.send('change-window-size');
};
