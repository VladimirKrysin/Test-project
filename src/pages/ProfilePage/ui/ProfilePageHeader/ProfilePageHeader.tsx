import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useCallback } from 'react';
import { getUserAuthData } from 'entities/User';

interface ProfilePageHeaderProps {
  className?: string;
}

const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, []);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, []);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, []);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {canEdit && (
        <div className={cls.btnsWrapper}>
          {readonly ? (
            <Button onClick={onEdit} className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
              {t('Редактировать')}
            </Button>
          ) : (
            <>
              <Button
                onClick={onCancelEdit}
                className={cls.editBtn}
                theme={ButtonTheme.OUTLINE_RED}
              >
                {t('Отменить')}
              </Button>
              <Button onClick={onSave} className={cls.saveBtn} theme={ButtonTheme.OUTLINE}>
                {t('Сохранить')}
              </Button>
              <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                {t('Редактировать')}
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export { ProfilePageHeader };
