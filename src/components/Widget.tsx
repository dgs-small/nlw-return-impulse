import { ChatTeardropDots } from 'phosphor-react';
import { useState } from 'react';
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm';

export function Widget() {

    return (
        <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>

            {/*Expressão booleana que irá, caso o estado seja true, irá retornar um elemento HTML, caso
            o contrário, irá retornar null. No React, o null não é mostrado na tela*/}

            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>

            <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
                <ChatTeardropDots className="w-6 h-6  " />

                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>Feedback</span>
            </Popover.Button>
        </Popover>
    )
}