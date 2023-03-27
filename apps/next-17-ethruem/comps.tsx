import { Button } from '@chakra-ui/react';
import { Comp, useString, } from "@raber/react";
import { useEffect, useState } from 'react';

const languages = [
    'Etérium',
    '以太坊',
    'Ethereum',
    'इथीरियम',
    'Ξ',
    'ఇథిరియూమ్'
]

export const LanguageSupportWidget = Comp(() => {
    // show lang in languages randomly
    // const lang = languages[Math.floor(Math.random() * languages.length)];

    const [lang, setlang] = useState('');

    useEffect(() => {
        setInterval(() => {
            setlang(languages[Math.floor(Math.random() * languages.length)])
        }, 1000)
    }, []);

    return (
        <div>
            <span>{lang}</span>
        </div>
    )
}, {
    category: 'Etherum',
    name: 'LanguageSupportWidget',
    description: 'A simple button',
    iconUrl: "https://firebasestorage.googleapis.com/v0/b/react-builder-c9ea4.appspot.com/o/image-svgrepo-com.svg?alt=media&token=467bdd4c-080c-4d43-9851-fcbf35b430c0",
});

export const VButton = Comp(({
    variant,
    text
}) => {

    // 每次组件渲染额时候，上报一次 UI 配置
    // 每次组件渲染时，从 context 读取 props 配置，然后渲染组件，
    // 不从 props 注入，采用截获的方式

    // 构思文案，子组件：

    // 子组件必须有一个唯一的 key，用于区分不同的子组件

    // const styles = useStyle();

    const _variant = useString({
        type: 'string',
        key: 'variant',
        default: variant,
        uiConfig: {
            label: 'Variant',
            widget: 'select',
            options: [
                { label: 'Solid', value: 'solid' },
                { label: 'Outline', value: 'outline' },
            ]
        },
    })

    const colorScheme = useString({
        type: 'string',
        key: 'colorScheme',
        default: 'blue',
        uiConfig: {
            label: 'Color Scheme',
            widget: 'select',
            options: [
                { label: 'Blue', value: 'blue' },
                { label: 'Red', value: 'red' },
                { label: 'Green', value: 'green' },
                { label: 'Yellow', value: 'yellow' },
                { label: 'Gray', value: 'gray' },
            ]
        },
    })

    const size = useString({
        type: 'string',
        key: 'size',
        default: 'md',
        uiConfig: {
            label: 'Size',
            widget: 'select',
            options: [
                { label: 'Small', value: 'sm' },
                { label: 'Medium', value: 'md' },
                { label: 'Large', value: 'lg' },
            ]
        },
    });


    const _text = useString({
        type: 'string',
        key: 'text',
        default: text,
        uiConfig: {
            label: 'Text',
            widget: 'input',
        },
    })

    const href = useString({
        type: 'string',
        key: 'href',
        default: '',
        uiConfig: {
            label: 'Href',
            widget: 'input',
        },
    })

    return <Button variant={_variant} onClick={() => {
        // go to href
        if (href) {
            window.open(href, '_blank')
        }

    }} size={size}>{_text}</Button>;
}, {
    category: 'Etherum',
    name: 'VButton',
    description: 'A simple button',
});