import { screen, render, fireEvent } from '@testing-library/react';
import Button from './button';
import { ButtonProps, ButtonSize, ButtonType } from './types';

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const props = {
      onClick: jest.fn(),
    };

    render(<Button {...props}>默认按钮</Button>);
    const element = screen.getByText('默认按钮') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(props.onClick).toHaveBeenCalled();
  });

  it('should render the correct component based on different props', () => {
    const props: ButtonProps = {
      btnType: ButtonType.Primary,
      size: ButtonSize.Large,
      className: 'testClassName',
    };

    render(<Button {...props}>按钮</Button>);
    const element = screen.getByText('按钮');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn-primary btn-lg testClassName');
  });

  it('should render a link when btnType equals link and href is provided', () => {
    const props: ButtonProps = {
      btnType: ButtonType.Link,
      href: 'https://www.baidu.com',
    };

    render(<Button {...props}>链接</Button>);
    const element = screen.getByText('链接');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn btn-link');
  });

  it('should render disabled button when disabled set to true', () => {
    const props: ButtonProps = {
      disabled: true,
      onClick: jest.fn(),
    };

    render(<Button {...props}>禁用按钮</Button>);
    const element = screen.getByText('禁用按钮') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(props.onClick).not.toHaveBeenCalled();
  });
});
