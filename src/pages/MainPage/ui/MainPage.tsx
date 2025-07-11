import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };
  return (
    <div style={{ color: 'blue' }}>
      {t('Главная страница')}
      <Input value={value} placeholder={t('Введите текст')} onChange={onChange} />
    </div>
  );
};

export default MainPage;
