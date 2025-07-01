import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
  DynamicModelLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModelLoader/DynamicModelLoader';
import { profileReducer } from 'entities/Profile';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  return (
    <DynamicModelLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>{t('Профиль')}</div>
    </DynamicModelLoader>
  );
};

export default ProfilePage;
