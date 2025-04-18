"use client";

import { Component, ErrorInfo } from "react";

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  Fallback: React.ComponentType<{ reset: () => void; error: Error }>;
}

export interface ErrorBoundaryState {
  error: Error | undefined;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      error: undefined
    };

    this.reset = this.reset.bind(this);
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(error, errorInfo);
  }

  reset() {
    this.setState({ error: undefined });
  }

  render() {
    const { Fallback, children } = this.props;
    if (this.state.error) {
      return <Fallback reset={this.reset} error={this.state.error} />;
    }
    return children;
  }
}
