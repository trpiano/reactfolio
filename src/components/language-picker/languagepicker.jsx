import React, { useState } from 'react';
import { i18n } from '../../translate/i18n';
import { Container } from './styles';

import "./styles"

const I18N_STORAGE_KEY = 'i18nextLng'

const handleSelectChange = event => {
localStorage.setItem(
    I18N_STORAGE_KEY,
    event.target.value
)
window.location.reload()
}

export const LangPicker = () => {

    const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY))

    return (
        <>
            <Container title={i18n.t('navbar.titles.language')} onChange={handleSelectChange} value={language}>
                <select>
                    <option>
                        {i18n.t('navbar.titles.language')}
                    </option>
                    <option value="pt-BR">
                        {i18n.t('navbar.languages.portuguese')}
                    </option>
                    <option value="en-US">
                        {i18n.t('navbar.languages.english')}
                    </option>
                </select>
            </Container>
        </>
    )
}