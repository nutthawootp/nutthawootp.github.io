import { render, screen } from '@testing-library/react';
import SkillIcon, { iconMap } from '../components/ui/SkillIcon';

describe('SkillIcon', () => {
  it('renders the correct icon for a given skill name', () => {
    render(<SkillIcon skillName="React" />);
    const icon = screen.getByLabelText(/react/i);
    expect(icon).toBeInTheDocument();
  });

  it('renders nothing if the skill name is not in the map', () => {
    const { container } = render(<SkillIcon skillName="NonExistentSkill" />);
    expect(container.firstChild).toBeNull();
  });

  it('applies the provided className to the icon', () => {
    render(<SkillIcon skillName="React" className="test-class" />);
    const icon = screen.getByLabelText(/react/i);
    expect(icon).toHaveClass('test-class');
  });

  it('renders all icons in the iconMap correctly', () => {
    Object.keys(iconMap).forEach(skillName => {
      const { unmount } = render(<SkillIcon skillName={skillName} />);
      const icon = screen.getByLabelText(new RegExp(`^${skillName}$`, 'i'));
      expect(icon).toBeInTheDocument();
      unmount();
    });
  });
});