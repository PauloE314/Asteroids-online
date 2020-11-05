interface IUseAudioProps {
  name?: string;
  volume?: number;
}

export function useAudio(props?: IUseAudioProps) {
  const { name, volume } = props || {};
  const audio = new Audio("audios/" + (name || "Move state.wav"));
  audio.volume = volume || 0.7;

  audio.load();

  return audio;
}

export function useCanvas() {}
