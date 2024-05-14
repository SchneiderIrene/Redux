import { ButtonComponent } from './styles';
import { ButtonProps } from './types';

function Button({ name, type = 'button', onButtonClick, disabled = false }: ButtonProps) {
  return (
    <ButtonComponent type={type} onClick={onButtonClick} disabled={disabled}>
      {name}
    </ButtonComponent>
  );
}

export default Button;
