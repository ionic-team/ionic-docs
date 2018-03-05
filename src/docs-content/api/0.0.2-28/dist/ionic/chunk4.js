/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const { h, Context } = window.Ionic;

import { isString } from './chunk1.js';

class DomFrameworkDelegate {
    attachViewToDom(parentElement, tagOrElement, data = {}, classesToAdd = []) {
        return new Promise((resolve) => {
            const usersElement = (isString(tagOrElement) ? document.createElement(tagOrElement) : tagOrElement);
            Object.assign(usersElement, data);
            if (classesToAdd.length) {
                for (const clazz of classesToAdd) {
                    usersElement.classList.add(clazz);
                }
            }
            parentElement.appendChild(usersElement);
            resolve({
                element: usersElement,
                data: data,
                component: tagOrElement
            });
        });
    }
    removeViewFromDom(parentElement, childElement) {
        parentElement.removeChild(childElement);
        return Promise.resolve();
    }
}

export { DomFrameworkDelegate };
