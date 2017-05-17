import React from 'react';
import {ReactTimer} from './lifecycle/react-timer';
import {ReduxTimer} from './redux-timer/redux-timer';
import styles from '../scss/main.scss'


// given number 12258 , translate to string
// abbeh, bveh, lyh, lbeh, abyh


// offset 97
console.log(String.fromCharCode(97));

const findTranslations = (translations, arr, translation) => {
    // base case : we're at end of the arr, in which case just push the translation
    if (arr.length === 0) {
        if (translation !== "") {
            translations.push(translation);
        }
    } else {
        // find translation for the first
       const t1 = translation + String.fromCharCode(96 + Number.parseInt(arr[0]));
       findTranslations(translations, arr.slice(1, arr.length), t1);

       if (arr.length > 1 && arr[0] <= 2 && arr[1] <= 6) {
           // find translations for second
           const addition = Number.parseInt(arr[0]) * 10 + Number.parseInt(arr[1]);
           const t2 = translation + String.fromCharCode(96 + addition);;
           findTranslations(translations, arr.slice(2, arr.length), t2);
       }
    }
}

const translate = (num) => {
    const translations = [];
    findTranslations(translations, num.toString().split(''), "");
    console.log(translations);
}

translate(12258);

/**
 * This is the primary Sandbox. 
 * Play here
 */
export const Sandbox = () => {
    const toReturn = [];
    const returnDuplicate = (arr) => {
        const hash = {};
        arr.forEach(num => hash[num] = hash[num] ? hash[num] + 1 : 1);
        return Object.keys(hash).filter(key => hash[key] > 1).map(x => Number.parseInt(x));
    }


    console.log(returnDuplicate([1, 10, 9, 10, 9, 8, 8, 8, 6]));
    return (
        <div>
            <div>{`----React Timer Instances----`}</div>
            <ReactTimer/>
            <ReactTimer/>
            <br/>
            <div>{`----Redux Timer Instances----`}</div>
            <ReduxTimer/>
            <p className={styles.p}>
                {
                String.raw`Try adding another Redux Timer.  What happens?  How can this be fixed?\n
                Hint: Every mounted timer might need a key corresponding to their store.\n
                Besides altering the store, what else would we need to do in componentWillUnmount?`
                }
            </p>
        </div>
    );
}


