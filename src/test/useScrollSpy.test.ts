import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useScrollSpy from '../hooks/useScrollSpy';

describe('useScrollSpy', () => {
  beforeEach(() => {
    // Clear the DOM
    document.body.innerHTML = '';
    
    // Create test sections
    const sections = ['section1', 'section2', 'section3'];
    sections.forEach(id => {
      const div = document.createElement('div');
      div.id = id;
      document.body.appendChild(div);
    });

    // Mock IntersectionObserver
    vi.stubGlobal('IntersectionObserver', vi.fn((callback, options) => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
      callback,
      options
    })));
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('initializes with no active section', () => {
    const { result } = renderHook(() => useScrollSpy({ sectionIds: ['section1', 'section2'], offset: 0 }));
    expect(result.current).toBe(null);
  });

  it('sets up observers for all section ids', () => {
    const sectionIds = ['section1', 'section2', 'section3'];
    renderHook(() => useScrollSpy({ sectionIds, offset: 0 }));

    // The IntersectionObserver should be created for each section
    const observer = vi.mocked(IntersectionObserver);
    expect(observer).toHaveBeenCalledTimes(1);
  });

  it('updates active section when intersection changes', () => {
    const sectionIds = ['section1', 'section2'];
    const { result } = renderHook(() => useScrollSpy({ sectionIds, offset: 0 }));

    const observer = vi.mocked(IntersectionObserver);
    const callback = observer.mock.calls[0][0];

    // Simulate section1 entering viewport
    act(() => {
      callback([{ isIntersecting: true, target: document.getElementById('section1') }]);
    });
    expect(result.current).toBe('section1');

    // Simulate section2 entering viewport
    act(() => {
      callback([{ isIntersecting: true, target: document.getElementById('section2') }]);
    });
    expect(result.current).toBe('section2');

    // Simulate section1 leaving and section2 leaving (no active section)
    act(() => {
      callback([
        { isIntersecting: false, target: document.getElementById('section1') },
        { isIntersecting: false, target: document.getElementById('section2') }
      ]);
    });
    expect(result.current).toBeNull();
  });
});